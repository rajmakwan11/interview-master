import { InterviewContext } from "../Interview.context"
import {generateInterviewReport, getInterviewReportById, getAllInterviewReports} from "../services/interview.api"
import { useContext, useEffect } from "react"
import { useParams } from "react-router"

export const useInterview = ()=>{
    const context = useContext(InterviewContext)
    const {interviewId} = useParams()

    if(!context){
        throw new Error("useInterview must be used within an interviewProvider")
    }

    const {loading, setLoading, report, setReport, reports, setReports} = context

    const generateReport = async ({jobDescription, selfDescription, resumeFile})=>{
        setLoading(true)
        let response = null
        try{
            response  = await generateInterviewReport({jobDescription, selfDescription, resumeFile})
            setReport(response.interviewReport) 
        }
        catch(err){
            console.log("ERR",err)
        }
        finally{
            setLoading(false)
        }
        return response.interviewReport
    }

    const getReportById = async(interviewId)=>{
        let response = null
        setLoading(true)
        try{
            response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
        }
        catch(err){
            console.log("Err", err)
        }
        finally{
            setLoading(false)
        }
        return response.interviewReport
    }

    const getReports = async()=>{
        setLoading(true)
        let response = null
        try{
            response = await getAllInterviewReports()
            setReports(response.interviewReports)
        }
        catch(err){
            console.log("ERR", err)
        }
        finally{
            setLoading(false)
        }
        return response.interviewReports

    }

      useEffect(()=>{
        async function handleParams(){

          if(interviewId){
            await getReportById(interviewId)
          }
          else{
            await getReports()
          }
        }
        handleParams()
      },[interviewId])


    return {loading, report, reports, generateReport, getReportById, getReports}

}
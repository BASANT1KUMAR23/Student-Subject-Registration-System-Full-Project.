import axios from "axios";

const SYLLABUS_API_BASE_URL="http://localhost:9090/api/v1/syllabuses";

class SyllabusService{
    getSyllabuses(){
        return axios.get(SYLLABUS_API_BASE_URL);
    }
    createSyllabus(syllabus){
        return axios.post(SYLLABUS_API_BASE_URL,syllabus);
    }
    getSyllabusById(syllabusId){
        return axios.get(SYLLABUS_API_BASE_URL +'/'+ syllabusId);
    }
    updateSyllabus(syllabus,syllabusId){
        return axios.put(SYLLABUS_API_BASE_URL +'/'+ syllabusId,syllabus);
    }
    deleteSyllabus(syllabusId){
        return axios.delete(SYLLABUS_API_BASE_URL + '/' + syllabusId);
    }

}

export default new SyllabusService ()
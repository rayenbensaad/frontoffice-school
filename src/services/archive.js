
import http from "./http-common"

class ArchiveService {
  getAll() {
    return http.get("/archives")
  }

  getAllDocs() {
    return http.get("/archives/docs")
  }

  getAllDocsLimit() {
    return http.get("/archives/docs-limit")
  }

  getAllTeacher() {
    return http.get("/archives/teachers")
  }

  getAllTeacherLimit() {
    return http.get("/archives/teachers-limit")
  }

  getAllStudent() {
    return http.get("/archives/students")
  }
  
  getAllAdminst() {
    return http.get("/archives/admins")
  }

}
export default new ArchiveService()
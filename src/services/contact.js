
import http from "./http-common"

class ContactService {
  contact(data) {
    return http.post("/contact", data)
  }

}
export default new ContactService()
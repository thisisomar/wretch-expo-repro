
import FormDataAddon from "wretch/addons/formData"
import wretch from "wretch"

export const customApi = wretch('http://localhost:5000')
  .addon(FormDataAddon)
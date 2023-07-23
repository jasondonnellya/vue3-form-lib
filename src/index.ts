import Button from '../components/Button.vue'
import Checkbox from '../components/Checkbox.vue'
import Files from '../components/Files.vue'
import Input from '../components/Input.vue'
import Radio from '../components/Radio.vue'
import Select from '../components/Select.vue'

const registerVueFormLibrary = (app) => {
  app.component(Button.name, Button);
  app.component(Checkbox.name, Checkbox);
  app.component(Files.name, Files);
  app.component(Input.name, Input);
  app.component(Radio.name, Radio);
  app.component(Select.name, Select); 
}

export default registerVueFormLibrary
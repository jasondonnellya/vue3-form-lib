import Button from '../components/Button.vue'
import Checkbox from '../components/Checkbox.vue'
import FileDrop from '../components/FileDrop.vue'
import Input from '../components/Input.vue'
import Select from '../components/Select.vue'

const registerVueFormLibrary = (app) => {
  app.component(Button.name, Button);
  app.component(Checkbox.name, Checkbox);
  app.component(FileDrop.name, FileDrop);
  app.component(Input.name, Input);
  app.component(Select.name, Select); 
}

export default registerVueFormLibrary
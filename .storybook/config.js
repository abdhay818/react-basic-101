import { configure } from '@kadira/storybook';
 
function loadStories() {
  require('../ToDoApp/components/stories/button');
  // require as many stories as you need.
}
 
configure(loadStories, module);
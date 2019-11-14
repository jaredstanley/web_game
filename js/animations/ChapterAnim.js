
import eventTypeManager from '../eventTypeManager';
import sectionManager from '../sectionManager';
import utils from '../utils';

class ChapterAnim {
    constructor(color){
        this.params = {x:0};      

    }

    init(){
        // console.log("anim.init() called");
      
        
        this.setup();
      } 
      
    getParams(){
        return this.params;
      }  
      //
    setup(){
        this.div = document.querySelector('#chapterHeader .anim');
        
        this.params = {
          container: this.div,
          renderer: 'svg',
          autoplay: true,
          loop: true,
          animationData: ""
        };
        
        
      }
}

export default ChapterAnim
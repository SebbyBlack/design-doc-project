
class TabLink {
    constructor(element) {
     
      this.element = element; 
      this.data = this.element.dataset.tab;
        
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`
      );
       
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', this.select.bind(this));
  
    };
  
    select() {
      
      const links = document.querySelectorAll('.tabs-link');
     
      Array.from(links).forEach(links => links.classList.remove('tabs-link-selected'));
      
      this.element.classList.add('tabs-link-selected');
       
        this.tabItem.select();
  
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {

      const items = document.querySelectorAll('.tabs-item').forEach(element => { element.classList.remove('tabs-item-selected')}
      );

      this.element.classList.add('tabs-item-selected');
    }
  }
  
  links = document.querySelectorAll('.tabs-link').forEach(element => new TabLink(element));
  
   function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  function thePopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
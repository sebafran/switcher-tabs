/*! simple switcher tabs | MIT License | author: sebafran | https://github.com/sebafran/ */

/*
	Class Switcher
		sw - container of switcher	- 	HTML Element
		i - iteration of button		-	integral

*/
class Switcher {
	constructor(sw, i){
		this.sw = sw;
		this.i = i;
	};
	toggle = () => {
		this.sw.data.swItems[this.sw.data.itemActive].classList.remove('active');
		this.sw.data.swBtns[this.sw.data.itemActive].classList.remove('active');
		this.sw.data.swItems[this.i].classList.add('active');
		this.sw.data.swBtns[this.i].classList.add('active');
		this.sw.data.itemActive = this.i;
		if(this.add)this.add(this)
	}
}

document.querySelectorAll('.switcher').forEach(sw => {
	
	/* Create propety data for switcher container */ 
	if(!sw.data)sw.data = {};
	sw.data.swItems = [...sw.querySelectorAll('.sw-item')];
	sw.data.swBtns = [...sw.querySelectorAll('button')];
	let swStart = parseInt(sw.dataset.start, 10);
	swStart||swStart>0||swStart<=sw.data.swItems.lenght?swStart = swStart - 1:swStart = 0;
	sw.data.itemActive = swStart;
	let i = 0;
	[...sw.querySelectorAll('button')].forEach(btn => {
		/* Create instance Switcher for each button */ 
		btn.sw = new Switcher(sw,i);
		btn.addEventListener('click',btn.sw.toggle,false);
		i++;
	});
	/* activation of the start item, also includes an assignment to the itemActive property above */
	sw.data.swItems[swStart].classList.add('active');
	sw.data.swBtns[swStart].classList.add('active');
});
/* caorousel cho lesson.html*/
const buttons = document.querySelectorAll(
    "[data-carousel-button]"
);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const indicator = document.querySelector("[data-nav]").querySelectorAll(".indicator");
        const temp = document.querySelector("[data-nav]");
        const indicatorActive = temp.querySelector("[data-active]");

        const ArrayIndicator = [].slice.call(indicator);
        console.log(ArrayIndicator);
        console.log(1);


        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;


        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        let newIndi = newIndex;
        console.log(newIndi)
        ArrayIndicator[newIndi].dataset.active = true;
        delete indicatorActive.dataset.active


        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;





        const paragraph = document.querySelector("[data-on]").querySelectorAll(".infor");
        const paragraphActivated = document.querySelector("[data-actived]");
        const nodeArray = [].slice.call(paragraph);
        let newPara = nodeArray.indexOf(paragraphActivated) + offset;
        if (newPara < 0) newPara = nodeArray.length - 1;
        if (newPara >= nodeArray.length) newPara = 0;
        nodeArray[newPara].dataset.actived = true;
        delete paragraphActivated.dataset.actived;



    })

});
/*hết */
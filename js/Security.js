class Security {

    constructor(){

        this.access1 = createInput("Et respondendum est")
        this.access1.position(100,130);
        this.access1.style('background', 'red');  

        this.button1 = createButton('Vérifier');
        this.button1.position(100,160);
        this.button1.style('background', 'blue');    

        this.access2 = createInput("Et respondendum est")
        this.access2.position(700,190);
        this.access2.style('background', 'green');  

        this.button2 = createButton('Vérifier');
        this.button2.position(700,220);
        this.button2.style('background', 'blue');
//add code for creating and positioning the third input box and button
this.access3 = createInput("Et respondendum est");
this.access3.position(100,390);
this.access3.style('background', 'gold');  

this.button3 = createButton('Vérifier');
this.button3.position(100,420);
this.button3.style('background', 'blue');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value("VARIABLE"))){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value("FUNCTION"))){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value("DATABASE"))){
        this.button3.hide();
        this.access3.hide();
        score+1;
    }
});

    }
}
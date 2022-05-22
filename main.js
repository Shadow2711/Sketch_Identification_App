quick_draw_data_set = ["airplane carrier" , "alarm clock" , "airplane" , "angel" , "animal migartion" , "ant" , "anvil" , "apple" , "arm" , "axe" , "asparagus" , "banana" , "backpack" , "baseball" , "baseball bat" , "basket" , "basketball" , "bat" , "bathtub" , "beach" , "bear" , "beard" , "bed" , "bee" , "belt" , "bench" , "bicycle" , "binoculars" , "bird" , "birthday cake" , "blackberry" , "blueberry" , "book" , "boomerang" , "bottlecap" , "bowtie" , "bracelet" , "brain" , "bread" , "bridge" , "broccoli" , "broom" , "bucket" , "bulldozer" , "bus" , "bush" , "butterfly" , "cactus" , "cake" , "calender" , "camel" , "camera" , "camouflage" , "campfire" , "cannon" , "cannoe" , "car" , "carrot" , "castle" , "cat" , "ceiling fan" , "cello" , "cell phone" , "chair" , "chandelier" , "church" , "circle" , "clarinet" , "clock" , "cloud" , "cofee cup" , "compass" , "computer" , "cookie" , "cooler" , "couch" , "cow" , "crab" , "crayon" , "crocodile" , "cruise ship" , "crown" , "cup" , "diamond" , "dishwasher" , "diving board" , "dog" , "dolphin" , "donut" , "door" , "dragon" , "dresser" , "drill" , "drums" , "duck" , "dumbell" , "ear" , "elbow" , "elephant" , "envelope" , "erase" , "eye" , "eyeglasses" , "face" , "fan" , "feather" , "fence" , "finger" , "fire hydrant" , "fireplace" , "firetruck" , "fish" , "flamingo" , "flashlight" , "flip flops" , "floor lamp" , "flower" , "flying soccer" , "foot" , "fork" , "frog" , "frying pan" , "garden" , "garden hose" , "giraffe" , "goat" , "golf club" , "grapes" , "grass" , "guitar" , "hamburger" , "hammer" , "hat" , "harp" , "headphones"]; 
random_number = Math.floor(Math.random()*quick_draw_data_set.length+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById('sketch_hint').innerHTML = "Sketch To Be Drawn : " + Element_of_array;
timer_counter = 0;
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;
sketch = Element_of_array;
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw(){
    check_sketch()
    if(draw_sketch == sketch){
        answer_holder = "set";
        score = score + 1;
        document.getElementById("score").innerHTML = 'Score : ' + score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = 'Timer : ' + timer_counter;
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
    }
}

function updateCanvas(){
    background("white");
    sketch = Element_of_array;
    document.getElementById("sketch_hint").innerHTML = "Sketch to be Drawn" + sketch;
}
quick_draw_data_set=["pen","paper","book","bottle"]
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
sketch = quick_draw_data_set[random_no]
console.log("sketch to be drawn:"+sketch);
document.getElementById("sketch").innerHTML = "sketch to be drawn:"+sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

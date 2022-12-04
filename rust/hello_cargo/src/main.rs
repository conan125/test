use std::io;
fn main() {
    println!("Hello, world!");
    println!("猜测一个数字");
    let mut guess_string = String::new();
    io::stdin().read_line(&mut guess_string).expect("wrong!");
    println!("this is {}", guess_string)
}

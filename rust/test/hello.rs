fn main(){
    println!("hello world");
    let mut a =7;
    let b="hello world";
    let c=true;
    let d:[&str;3]=["2","3","4"];
    a=9;
    println!("a = {}",a);
    println!("b = {}",b);
    println!("c = {:?}",c);
    println!("c = {:?}",d);
    // println!("d = {}",d.len());
    for elem in d {
        println!("d={}",elem);
    }
}
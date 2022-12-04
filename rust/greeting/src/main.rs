fn main() {
    let args = std::env::args();
    println!("{:?}", args);
    main2()
}
fn main2() {
    let args = std::env::args();
    for arg in args {
        println!("{:?}", arg);
    }
    main3();
    main1()
}
use std::collections::HashMap;

fn main3() {
    let mut map = HashMap::new();

    map.insert("color", "red");
    map.insert("size", "10 m^2");

    for p in map.iter() {
        println!("{:?}", p);
    }
}
pub struct ClassName {
    field: i32,
}

impl ClassName {
    pub fn new(value: i32) -> ClassName {
        ClassName { field: value }
    }

    pub fn public_method(&self) {
        println!("from public method");
        self.private_method();
    }

    fn private_method(&self) {
        println!("from private method");
    }
}

fn main1() {
    let object = ClassName::new(1024);
    object.public_method();
}

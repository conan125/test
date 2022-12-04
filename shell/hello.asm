SECTION .data

msg: db "hello world2", $0a
len: equ $-msg

SECTION .text
global _main

kernel:
    syscall
    retq
    
_main:
    mov rax,$2000004
    mov rdi,1
    mov rsi,msg
    mov rdx,len
    call kernel

    mov rax,$2000001
    mov rdi,0
    call kernel

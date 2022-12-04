.486        ; 定义32位程序可以接受32位的寄存器和地址
.model flat, stdcall    ; 选择程序的内存模式为平坦模式，stdcall调用习惯
.stack 4096             ; 设置运行的堆栈大小为4096字节
ExitProcess PROTO, dwExitCode: DWORD    
 
 
COMMENT &
    字符串翻转
&
.data
    aName BYTE "Abraham Lincoln", 0
    nameSize = ($ - aName) - 1
 
.code
main PROC                   ; 定义主函数开始位置
    ; 将那么长度存入寄存器
    mov ecx, nameSize
    mov esi, 0
L1: movzx eax, aName[esi]   ; 获取字符
    push eax                ; 压入栈中
    inc esi                 ; 循环变量自加
    LOOP L1
 
    ; 翻转字符串
    mov ecx, nameSize
    mov esi, 0
L2: pop eax                 ; 获取字符
    mov aName[esi], al      ; 存放字符
    inc esi                 ; 循环变量自加
    LOOP L2
 
    INVOKE ExitProcess, 0   ; 退出程序2
main ENDP           ; 函数结束位置, ENDP 之前的内容，要与PROC 
END main            ; 设置了函数的入口与出口
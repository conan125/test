name=$1

asmfile=${name##*/}

path=${name%/*}

echo "编译 ${asmfile} 中……"

nasm -f macho64 ${name}

asmname=${asmfile%.*}

echo "编译成功！开始连接${asmname}.o ……"

gcc -o ${path}/${asmname} -Wl,-no_pie ${path}/${asmname}.o

echo "连接成功！开始运行 ${asmname} 可执行文件："

${path}/${asmname}

echo "运行结束！"

rm ${path}/*.o

rm ${path}/${asmname}

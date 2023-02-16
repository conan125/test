f :: [Integer] -> Integer
f []=0
f [x]= x
f [x,y]=maximum [x,y]
f (x:y:xs)=max (x+ (f xs)) (f(y:xs))
import java.util.Scanner;
class gcdeuclidoptimise{
    static int gcd(int a,int b){
        while(a != 0&& b != 0){
            if(a>b){
            a= a-b;
        }
        else{
            b = b - a;
        }
        }
        if(a!=0){
            return a;
        }
        else{
            return b;
        }
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(gcd(a,b));
    }
}
/*
input: a = 20,b = 15
output: 5

Algorithm:
step 1: find the remainder 
if(a>b)
step 2: replace largest number by remainder number
a = a % b
b = b  % a
step 3: repeat the step 1 and step 2 until the one number is equal to  0.
while(a!=0 && b != 0)
step 4: return the one number which is not zero. 
if(a!=0){
    return a;
}
else{
    return b;
}
*/
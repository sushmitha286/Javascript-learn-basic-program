import java.util.Scanner;
class gcdeuclid{
    static int gcd(int a,int b){
        while(a!=b){
            if(a>b){
            a= a-b;
        }
        else{
            b = b - a;
        }
        }
        return a;
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
step 1: find the largest number
if(a>b)
step 2: replace largest number by difference of largest and smaller number
a = a - b
b = b -a
step 3: repeat the step 1 and step 2 until the both the number is equal.
while(a!=b)
step 4: return the one number which is gcd. 
return a or return b;
*/
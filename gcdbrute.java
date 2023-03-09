import java.util.Scanner;
class gcdbrute{
    static int gcdtwonum(int a,int b){
        int min= 0;
        if(a<b){
            min = a;
        }else{
            min = b;
        }
        for(int i = min;i>=1;i--){
            if(a%i==0 &&  b%i == 0){
                return i;
            }
        }
        return 1;
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(gcdtwonum(a,b));
    }
}
/*
input: a = 20 ,b = 15
output : 5

Algorithm:
step 1: find minimum of both a and b
if(a<b){
    min = a
}else{
    min = b
}
step 2: use the for loop and start from i = min and go till one
for(int i = min;i>=1;i--)
step 3: inside the loop  chceck if i is a common divisor: factor by using to calcuate remainder = 0
if(a%i==0 && b%i == 0)
step 4: if i is a common divisor return.
return i

explanation: this is brute force algorithm to calcuate the gcd
brute force analysis: iterationn over all the element to get the actual value.

*/
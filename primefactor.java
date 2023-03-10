import java.util.Scanner;
class primefactor{
    static void primefactors(int n){
        int  i = 2;
        while(i*i<=n){//while(i>1)
            while(n%i==0){
            System.out.println(i);
            n = n/i;
        }
        i++;
        }
        //if while(i>1) then this code is not used 
        if(n>1){
            System.out.println(n); 
        }
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        primefactors(n);
        
    }
}


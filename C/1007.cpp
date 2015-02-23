#include<stdio.h>
#include<stdlib.h>

int main()
{  
    
    int A = 0; 
    int B = 0;
    int C = 0;
    int D = 0;
    int DIFERENCA = 0;

    scanf("%i", &A);
    scanf("%i", &B);
    scanf("%i", &C);
    scanf("%i", &D);
        
    DIFERENCA = (A * B - C * D);
    
    printf("DIFERENCA = %i\n", DIFERENCA);
    system("pause");
    
    return 0;    
}


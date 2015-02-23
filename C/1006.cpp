#include<stdio.h>
#include<stdlib.h>

int main()
{  
    
    double nota1, nota2, nota3, MEDIA = 0; 
    

    scanf("%lf", &nota1);
    scanf("%lf", &nota2);
    scanf("%lf", &nota3);
    
    MEDIA = ( nota1 * 2 + nota2 * 3 + nota3 * 5 ) / 10;
    
    printf("MEDIA = %.1lf\n", MEDIA);
    system("pause");
    
    return 0;    
}


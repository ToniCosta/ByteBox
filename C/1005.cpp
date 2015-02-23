#include<stdio.h>
#include<stdlib.h>

int main()
{  
    
    double nota1, nota2, MEDIA = 0; 
    

    scanf("%lf", &nota1);
    scanf("%lf", &nota2 );
    
    
    MEDIA = ( nota1 * 3.5 + nota2 * 7.5 ) / 11;
    
    printf("MEDIA = %.5lf\n", MEDIA);
    system("pause");
    
    return 0;    
}


#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{  
    int DISTANCIA = 0;
    float TOTALCOMBUSTIVEL = 0;
    float MEDIACOMBUSTIVEL = 0;
    
    scanf("%i", &DISTANCIA);
    scanf("%f", &TOTALCOMBUSTIVEL);

	MEDIACOMBUSTIVEL = DISTANCIA / TOTALCOMBUSTIVEL;  
    
    
    printf("%.3f km/l\n", MEDIACOMBUSTIVEL);
        
    system("pause");
    
    return 0;    
}

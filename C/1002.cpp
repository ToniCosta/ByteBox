#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{  
    
    float AREA = 0;
    float RAIO = 0;
    const double PI = 3.14159;
    
    scanf("%f", &RAIO);
            
    AREA = PI *pow(RAIO, 2);
    
    printf("A=%.4f\n", AREA);
    
    system("pause");
    
    return 0;    
}

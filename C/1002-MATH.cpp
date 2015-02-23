
#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{  
    
    int AREA;
    int RAIO;
    const double PI = 3.14159;
    
    scanf("%i", &RAIO);
            
    AREA = PI *pow(RAIO, 2);
    
    printf("A = %.4i\n", AREA);
    
    system("pause");
    
    return 0;    
}




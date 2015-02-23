#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{  
    int TEMPOVIAGEM = 0;
    float VELOCIDADEMEDIA = 0;
    float QTDLITROS = 0;
    
    scanf("%i", &TEMPOVIAGEM);
    scanf("%f", &VELOCIDADEMEDIA);

	QTDLITROS = (TEMPOVIAGEM * VELOCIDADEMEDIA) / 12;  
    
    
    printf("%.3f\n", QTDLITROS);
        
    system("pause");
    
    return 0;    
}

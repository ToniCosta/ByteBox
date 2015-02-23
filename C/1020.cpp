#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{  
    
    int ENTRADA = 0;
    int ANODIAS = 365;
    int MESANO = 12;
    int DIASMESES = 30;
    int ANO = 0;
    int MES = 0;
    int DIA = 0;
    
    scanf("%i", &ENTRADA);

	ANO = ENTRADA / ANODIAS;
	MES =  (ENTRADA - ANODIAS) / DIASMESES;
	DIA = ENTRADA - ANODIAS - DIASMESES;       
    
    
    printf("%i ano(s)\n", ANO);
    printf("%i mes(es)\n", MES);
    printf("%i dia(s)\n", DIA);
    
    system("pause");
    
    return 0;    


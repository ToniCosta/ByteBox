#include<stdio.h>
#include<stdlib.h>

int main()
{  
    
    int numUm = 0; 
    int numDois = 0;
    int numTres = 0;
    int saidaMaior = 0;
    
    scanf("%i%i%i", &numUm, &numDois, &numTres);
           
    if (numUm < numDois) {
    
    	saidaMaior = numDois;
    }
    if (numDois < numTres) {
    
    	saidaMaior = numTres;
    }
    
    printf("%i eh o maior\n", saidaMaior);
    
    system("pause");
    
    return 0;    
}



import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);

		double x1, x2, y1, y2;
		double x, y;
		
		Ponto ponto1 = new Ponto();
		Ponto ponto2 = new Ponto();

		System.out.println("Digite o valor de x1:");
		ponto1.setX(leitor.nextInt());
		x1 = ponto1.getX();

		System.out.println("Digite o valor de x2:");
		ponto1.setX(leitor.nextInt());
		x2 = ponto1.getX();

		System.out.println("Digite o valor de y1:");
		ponto2.setY(leitor.nextInt());
		y1 = ponto2.getY();

		System.out.println("Digite o valor de y2:");
		ponto2.setY(leitor.nextInt());
		y2 = ponto2.getY();

		if (ponto1.igual(ponto2)) {
			System.out.println("A distância entre os pontos são iguais");
		} else {
			System.out.println("A distância entre os pontos não são iguais");
		}

		System.out.println("A distancia entre dois pontos é " + 
		ponto1.distancia(ponto2));
		leitor.close();

	}

}

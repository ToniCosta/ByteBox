
public class Ponto {
	private double x;
	private double y;
	public Ponto() {
		this.x = 0;
		this.y = 0;
	}

	public Ponto(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public void setX(double X) {
		this.x = X;
	}

	public double getY() {
		return y;
	}

	public void setY(double Y) {
		this.y = Y;
	}

	public boolean igual(Ponto p) {
		
		if (this.x == p.y && this.x == p.y) {
			return true;
		} else {
			return false;
		}
	}

	public double distancia(Ponto p) {
	 x = Math.pow(this.x - p.x, 2);
	 y = Math.pow(this.y - p.y, 2);
	 
	 return Math.sqrt(x + y);
	}
}

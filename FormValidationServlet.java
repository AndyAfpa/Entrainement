import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@WebServlet("/FormValidationServlet")
public class FormValidationServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Récupérer les données du formulaire
        String nom = request.getParameter("nom");
        String prenom = request.getParameter("prenom");
        String email = request.getParameter("email");

        // Vous pouvez effectuer des validations ici
        boolean isValid = true;

        if (nom == null || nom.isEmpty()) {
            out.println("Le champ Nom est obligatoire.<br>");
            isValid = false;
        }

        if (prenom == null || prenom.isEmpty()) {
            out.println("Le champ Prénom est obligatoire.<br>");
            isValid = false;
        }

        // Vous pouvez ajouter d'autres validations ici pour le champ email, etc.

        if (isValid) {
            // Si toutes les validations réussissent, traitez les données ou redirigez l'utilisateur
            // vers une autre page de confirmation.
            out.println("Formulaire valide. Traitement des données...<br>");
            // Ajoutez ici le code de traitement des données
        }

        out.close();
    }
}
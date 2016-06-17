package my.test.configuration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.EnumSet;
import java.util.Iterator;

/**
 * Created by dragan on 16-Apr-16.
 */
public class WebAppInitializer implements WebApplicationInitializer {

    public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        ctx.register(AppConfig.class);
        ctx.setServletContext(servletContext);

        ServletRegistration.Dynamic servlet = servletContext.addServlet("dispatcher", new DispatcherServlet(ctx));
        FilterRegistration.Dynamic filter = servletContext.addFilter("filter", new Filter() {
            @Override
            public void init(FilterConfig filterConfig) throws ServletException {

            }

            @Override
            public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
             String url = ((HttpServletRequest)servletRequest).getRequestURI();
               if(url.contains("home")){
                   servletRequest.getRequestDispatcher("dispatcher").forward(servletRequest,servletResponse);
               }else{
                   filterChain.doFilter(servletRequest,servletResponse);
               }
            }

            @Override
            public void destroy() {

            }
        });

        filter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST),true,"/*");

        servlet.setLoadOnStartup(1);
      servlet.addMapping("/test/home/*");
    }


}

package my.test.configuration;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

import javax.servlet.Filter;

/**
 * Created by dragan on 16-Apr-16.
 */
public class WebAppInitializer extends AbstractDispatcherServletInitializer {


    @Override
    protected WebApplicationContext createRootApplicationContext() {
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        ctx.setConfigLocation(AppConfig.class.getPackage().getName());
        return  ctx;
    }

    @Override
    protected WebApplicationContext createServletApplicationContext() {
        return createRootApplicationContext();
    }

    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter characterEn=new CharacterEncodingFilter();
        characterEn.setEncoding("UTF-8");
        characterEn.setForceEncoding(true);
        return new Filter[]{characterEn};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

}

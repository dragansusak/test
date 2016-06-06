package my.test.dto.converter;

import org.springframework.beans.BeanUtils;

import java.lang.reflect.ParameterizedType;

/**
 * Created by Dragan Susak on 06-Jun-16.
 */

public class BaseConverter<MODEL,DTO> implements ModelDtoConverter<MODEL, DTO> {

    @Override
    public MODEL convertToModel(DTO dto) {
        MODEL model;
        try {
            model = getModelInstance();
        }catch (Exception e) {
            return null;
        }
        BeanUtils.copyProperties(dto,model);
        return model;
    }

    @Override
    public DTO convertToDto(MODEL model)  {
        DTO dto;
        try {
            dto = getDtoInstance();
        } catch (Exception e) {
            return null;
        }
        BeanUtils.copyProperties(model,dto);
        return dto;
    }

    private MODEL getModelInstance() throws IllegalAccessException, InstantiationException {
        ParameterizedType superClass = (ParameterizedType) getClass().getGenericSuperclass();
        Class<MODEL> type = (Class<MODEL>) superClass.getActualTypeArguments()[0];
        return type.newInstance();
    }

    private DTO getDtoInstance() throws IllegalAccessException, InstantiationException {
        ParameterizedType superClass = (ParameterizedType) getClass().getGenericSuperclass();
        Class<DTO> type = (Class<DTO>) superClass.getActualTypeArguments()[1];
        return type.newInstance();
    }

}

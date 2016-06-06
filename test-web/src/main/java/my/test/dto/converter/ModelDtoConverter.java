package my.test.dto.converter;

/**
 * Created by Dragan Susak on 06-Jun-16.
 */
public interface ModelDtoConverter<MODEL,DTO> {

    MODEL convertToModel(DTO dto) throws InstantiationException, IllegalAccessException;

    DTO convertToDto(MODEL model) throws InstantiationException, IllegalAccessException;
}

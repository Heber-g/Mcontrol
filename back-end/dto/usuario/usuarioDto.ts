export class usuarioDto {
    id: number | undefined;
    nome: string | undefined;
    cpf: string | undefined;
    data_uniao: Date | undefined;
    data_batismo: Date | undefined;

    static fromEntity(entity: any): usuarioDto {
        const dto = new usuarioDto();
        dto.id = entity.id;
        dto.nome = entity.nome;
        dto.cpf = entity.cpf;
        dto.data_uniao = entity.data_uniao;
        dto.data_batismo = entity.data_batismo;
        return dto;
    }
}

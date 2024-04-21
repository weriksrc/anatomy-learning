<template>
  <v-container>
    <BaseDataTable
      :headers="headers"
      :items="dataTable"
      :items-per-page="10"
      :loading="loading"
      :title="'Alunos'"
    >
      <template slot:item.actions="{ item }">
        <div class="d-flex justify-end">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="openModalEdit(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="deleteItem(item)">
                <v-icon>mdi-division</v-icon>
              </v-btn>
            </template>
            <span>Deletar</span>
          </v-tooltip>
        </div>
      </template>
    </BaseDataTable>
  </v-container>
</template>

<script>
import BaseDataTable from "@/components/BaseDataTable.vue";
export default {
  name: "AlunoView",

  components: {
    BaseDataTable,
  },

  data() {
    return {
      loading: false,
      headers: [
        {
          text: "Nome",
          value: "nome",
        },
        {
          text: "CPF",
          value: "cpf",
        },
        {
          text: "Endereço",
          value: "endereco",
        },
        {
          text: "E-mail",
          value: "email",
        },
      ],

      dataTable: [
        {
          nome: "João da Silva",
          cpf: "123.456.789-09",
          endereco: "Rua A, 123",
          email: "joao@example.com",
        },
        {
          nome: "Maria Santos",
          cpf: "987.654.321-00",
          endereco: "Avenida B, 456",
          email: "maria@example.com",
        },
        {
          nome: "Pedro Oliveira",
          cpf: "456.789.123-45",
          endereco: "Praça C, 789",
          email: "pedro@example.com",
        },
        {
          nome: "Ana Pereira",
          cpf: "789.012.345-67",
          endereco: "Rua D, 567",
          email: "ana@example.com",
        },
        {
          nome: "Luiz Fernandes",
          cpf: "234.567.890-12",
          endereco: "Avenida E, 678",
          email: "luiz@example.com",
        },
        {
          nome: "Carla Lima",
          cpf: "345.678.901-23",
          endereco: "Rua F, 890",
          email: "carla@example.com",
        },
        {
          nome: "Márcio Santos",
          cpf: "678.901.234-56",
          endereco: "Avenida G, 1234",
          email: "marcio@example.com",
        },
        {
          nome: "Julia Costa",
          cpf: "890.123.456-78",
          endereco: "Rua H, 2345",
          email: "julia@example.com",
        },
        {
          nome: "Fernando Pereira",
          cpf: "567.890.123-45",
          endereco: "Praça I, 3456",
          email: "fernando@example.com",
        },
        {
          nome: "Larissa Silva",
          cpf: "012.345.678-90",
          endereco: "Avenida J, 4567",
          email: "larissa@example.com",
        },
      ],
    };
  },
};
</script>

<style></style>

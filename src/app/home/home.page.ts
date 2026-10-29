import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pencilOutline, trashOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonIcon, FormsModule],
})
export class HomePage {
  // Modelo para el formulario
  name: string = '';
  description: string = '';

  // Variable para controlar si se está editando
  editingId: number | null = null;

  items = [
    { id: 1, name: "Pokemon Yellow", description: "Juego clásico de RPG para Game Boy" },
    { id: 2, name: "Mega Man X", description: "Juego de acción y plataformas para SNES" },
    { id: 3, name: "The Legend of Zelda", description: "Aventura clásica de acción y exploración" }
  ];

  constructor() {
    addIcons({ pencilOutline, trashOutline, closeOutline });
  }

  // Guardar (crear o actualizar) elemento
  saveItem() {
    if (!this.name.trim()) {
      return;
    }

    if (this.editingId !== null) {
      // Modo edición: actualizamos el item existente
      const index = this.items.findIndex(i => i.id === this.editingId);
      if (index !== -1) {
        this.items[index] = {
          ...this.items[index],
          name: this.name,
          description: this.description
        };
      }
    } else {
      // Modo creación: agregamos uno nuevo
      const newItem = {
        id: Date.now(),
        name: this.name,
        description: this.description
      };
      this.items.push(newItem);
    }

    this.resetForm();
  }

  // Cargar datos en el formulario para editar
  editItem(item: { id: number; name: string; description: string }) {
    this.editingId = item.id;
    this.name = item.name;
    this.description = item.description;
  }

  // Cancelar la edición y limpiar campos
  resetForm() {
    this.editingId = null;
    this.name = '';
    this.description = '';
  }

  // Función Eliminar elemento de la lista
  removeItemId(itemId: any) {
    console.log("Eliminar elemento");
    this.items = this.items.filter(i => i.id !== itemId);
    if (this.editingId === itemId) {
      this.resetForm();
    }
  }

  ngOnInit() {
  }
}

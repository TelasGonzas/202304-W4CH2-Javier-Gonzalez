import { SyntheticEvent } from "react";
import { Personal } from "../../models/Model";

export function AddPersonalData() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const personalDataInput = new Personal(
      (form.elements.namedItem("name") as HTMLInputElement).value,
      (form.elements.namedItem("lastName") as HTMLInputElement).value,
      (form.elements.namedItem("birth") as HTMLInputElement).value,
      (form.elements.namedItem("gender") as HTMLInputElement).value,
      (form.elements.namedItem("email") as HTMLInputElement).value
    );
    console.log(personalDataInput);
  };

  return (
    <main>
      <form aria-label="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div>
          <label htmlFor="birth">BirthDate</label>
          <input type="date" name="birth" id="birth" required />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer not to mention">Prefer not to mention</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <label>
          <input type="checkbox"></input>Desea recibir información de nuestra
          newsletter?
        </label>
        <button type="submit">Añadir</button>
      </form>
    </main>
  );
}

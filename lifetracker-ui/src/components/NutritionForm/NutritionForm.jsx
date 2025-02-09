import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NutritionContext from "../../contexts/nutrition";
import apiClient from "../../services/apiClient";
import "./NutritionForm.css";

export default function NutritionForm() {
  const { nutritionContext } = useContext(NutritionContext);
  const [nutritions, setNutritions] = nutritionContext;
  const navigate = useNavigate();
  const formInit = {
    name: "",
    category: "",
    quantity: 1,
    calories: 1,
    image: "",
  };

  const [form, setForm] = useState(formInit);
  const [error, setError] = useState();

  const onFormChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
    setError();
  };

  const handleOnSubmit = async () => {
    const { data, error } = await apiClient.createNutrition(form);
    if (error) {
      setError(error);
    } else {
      setNutritions(data.nutritions);
      setForm(formInit);
      navigate("/nutrition");
    }
  };

  return (
    <div className="nutrition-form">
      <div className="nutrition-form-content">
        <h1>Record Nutrition</h1>
        <p style={{ color: "red" }}>{error}</p>
        <div className="nutrition-form-section">
          <label htmlFor="name"></label>
          <input
            name="name"
            type={"text"}
            value={form.name}
            placeholder={"Name"}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className="nutrition-form-section">
          <label htmlFor="category">
            Category <span class="required-field">*</span>
          </label>
          <select name="category" onChange={(e) => onFormChange(e)}>
            <option value="" disabled selected>
              Select a category
            </option>
            <option value={form.category.value}>Snack</option>
            <option value={form.category.value}>Beverage</option>
            <option value={form.category.value}>Food</option>
          </select>
        </div>

        <div className="nutrition-form-split-section">
          <div className="nutrition-form-section">
            <label htmlFor="quantity">
              Quantity
              <span class="required-field">*</span>
            </label>
            <input
              name="quantity"
              type={"number"}
              value={form.quantity}
              min={"1"}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="nutrition-form-section">
            <label htmlFor="calories">
              Calories
              <span class="required-field">*</span>
            </label>
            <input
              name="calories"
              type={"number"}
              value={form.calories}
              min={"10"}
              step={"10"}
              onChange={(e) => onFormChange(e)}
            />
          </div>
        </div>
        <div className="nutrition-form-section">
          <label htmlFor="image"></label>
          <input
            name="image"
            type={"text"}
            value={form.image}
            placeholder={"url for image"}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <button
          onClick={() => handleOnSubmit()}
          className="nutrition-submit-registration form-button"
        >
          Save
        </button>
      </div>
    </div>
  );
}

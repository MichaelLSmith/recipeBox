<App>
  <div>
    if Empty Recipe Obj -->
      Just display Add Recipe Button
    <ul>
      {/* map over recipes obj */}
      <li>
        <Recipe />
      </li>
      {/* map end */}
    </ul>
    <button onClick={open modal form instance}>Add Recipe</button>
  </div>
</App>

Recipe Component:
  <div>
    <h2>recipe name (Clickable to Open Panel)</h2>
    <Panel collapsible (check docs for exact syntax)>
      <ul>
        <li>
          <Ingredients/>
        </li>
        <button>Delete</button>
        <button onClick={open modal form Instance}>Edit</button>
      </ul>
    </Panel>
  </div>

  Ingredients Component: see actual file. I don't think it's going to change

  Modal Container Component:
    Modal --> SubComponents
      RecipeForm

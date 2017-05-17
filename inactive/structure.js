<App> Container
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
    <button>
      {opens modal}
      Add Recipe
    </button>
    <ModalWrapper
      props={what needs to be passed to ModalWrapper? The RecipeForm is a container. So it will be connected to store for data}
    />

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

  Modal Wrapper Component:
    button to open modal
    Modal --> SubComponents
      RecipeForm

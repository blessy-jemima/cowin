import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {details} = props
  const {count} = details
  return (
    <div className="bg-container">
      <p className="age-para">Vaccination by age</p>
      <ResponsiveContainer
        width="100%"
        height={300}
        className="react-container"
      >
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={details}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey={count}
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge

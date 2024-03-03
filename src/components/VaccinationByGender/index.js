import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {details} = props
  const {count} = details
  return (
    <div className="bg-container">
      <p className="gender-heading">Vaccination by gender</p>
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
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey={count}
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Other" fill="#2cc6c6" />
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

export default VaccinationByGender

namespace KnitWitt_G35_Project.Models.CRUDS
{
    public interface Emp_Interface
    {
        //public List<Person> SelectAll();
        public List<Person> SelectByID(int id);
        public void Insert(Person requestParams1);
        public void Update(Person requestParams1);
        public void Delete(int id);
    }
}
